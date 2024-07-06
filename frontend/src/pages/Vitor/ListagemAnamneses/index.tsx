import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

type Anamnese = {
  cpf_pac: string;
  anm_nome: string;
  anm_idade: number;
  anm_rg: string;
  status_anamnese: string;
};

const ListagemAnamneses: React.FC = () => {
  const [anamneses, setAnamneses] = useState<Anamnese[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedAnamnese, setSelectedAnamnese] = useState<string | null>(null);
  const navigate = useNavigate();
  const userType = localStorage.getItem("userType");

  useEffect(() => {
    const fetchAnamneses = async () => {
      try {
        const response = await axios.get("http://localhost:3000/anamnese/list");
        setAnamneses(response.data);
      } catch (error) {
        console.error("Erro ao buscar anamneses:", error);
      }
    };

    fetchAnamneses();
  }, []);

  const handleCadastrar = () => {
    if (userType === "coordenador" || userType === "supervisor") {
      navigate("/visualizar-anamnese");
    } else {
      navigate("/cadastrar-anamnese");
    }
  };

  const handleEditar = (anamnese: Anamnese) => {
    if (userType === "coordenador" || userType === "supervisor") {
      navigate("/visualizar-anamnese", { state: { anamnese } });
    } else {
      navigate("/cadastrar-anamnese", { state: { anamnese } });
    }
  };

  const handleClickOpen = (cpf_pac: string) => {
    setSelectedAnamnese(cpf_pac);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedAnamnese(null);
  };

  const handleDelete = async () => {
    if (selectedAnamnese) {
      try {
        await axios.delete(
          `http://localhost:3000/anamnese/${selectedAnamnese}`
        );
        setAnamneses(
          anamneses.filter((anamnese) => anamnese.cpf_pac !== selectedAnamnese)
        );
        handleClose();
      } catch (error) {
        console.error("Erro ao deletar anamnese:", error);
      }
    }
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "A":
        return { backgroundColor: "green", color: "white" };
      case "R":
        return { backgroundColor: "red", color: "white" };
      case "P":
      default:
        return { backgroundColor: "yellow", color: "black" };
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "A":
        return "Aprovado";
      case "R":
        return "Reprovado";
      case "P":
      default:
        return "Pendente";
    }
  };

  return (
    <div>
      <Grid
        container
        justifyContent="flex-end"
        style={{ marginBottom: "20px" }}
      >
        {userType === "estagiario" && (
          <Button variant="contained" color="primary" onClick={handleCadastrar}>
            Cadastrar Anamnese
          </Button>
        )}
      </Grid>
      <TableContainer component={Paper} style={{ width: "100%" }}>
        <Table style={{ width: "100%" }}>
          <TableHead>
            <TableRow>
              <TableCell width={2}>CPF Paciente</TableCell>
              <TableCell width={4}>Nome</TableCell>
              <TableCell width={2}>Idade</TableCell>
              <TableCell width={2}>RG</TableCell>
              <TableCell width={2}>Status</TableCell>
              <TableCell width={4}>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {anamneses.map((anamnese, index) => (
              <TableRow key={index}>
                <TableCell width={2}>{anamnese.cpf_pac}</TableCell>
                <TableCell width={4}>{anamnese.anm_nome}</TableCell>
                <TableCell width={2}>{anamnese.anm_idade}</TableCell>
                <TableCell width={2}>{anamnese.anm_rg}</TableCell>
                <TableCell
                  width={2}
                  style={getStatusStyle(anamnese.status_anamnese)}
                >
                  {getStatusText(anamnese.status_anamnese)}
                </TableCell>
                <TableCell width={4}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    style={{ marginRight: 8 }}
                    onClick={() => handleEditar(anamnese)}
                  >
                    Editar
                  </Button>
                  {userType === "estagiario" && (
                    <Button
                      variant="contained"
                      color="secondary"
                      size="small"
                      onClick={() => handleClickOpen(anamnese.cpf_pac)}
                    >
                      Deletar
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirmação de Deleção"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Você tem certeza que deseja deletar esta anamnese?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleDelete} color="secondary" autoFocus>
            Deletar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ListagemAnamneses;
