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
  CircularProgress,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
  const [loading, setLoading] = useState(false);
  const [selectedAnamnese, setSelectedAnamnese] = useState<string | null>(null);
  const navigate = useNavigate();
  const userType = localStorage.getItem("userType");

  useEffect(() => {
    fetchAnamneses();
  }, [userType]);

  const fetchAnamneses = async () => {
    setLoading(true);
    try {
      const endpoint =
        userType === "coordenador"
          ? "http://localhost:3000/anamnese/armazenar"
          : "http://localhost:3000/anamnese";
      const response = await axios.get(endpoint);
      setAnamneses(response.data);
    } catch (error) {
      toast.error("Erro ao buscar anamneses");
    } finally {
      setLoading(false);
    }
  };

  const handleCadastrar = () => {
    const route =
      userType === "coordenador" || userType === "supervisor"
        ? "/visualizar-anamnese"
        : "/cadastrar-anamnese";
    navigate(route);
  };

  const handleEditar = (anamnese: Anamnese) => {
    const route =
      userType === "coordenador" || userType === "supervisor"
        ? "/visualizar-anamnese"
        : "/cadastrar-anamnese";
    navigate(route, { state: { anamnese } });
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
        toast.error("Erro ao deletar anamnese");
      }
    }
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "A":
        return { backgroundColor: "#d4edda", color: "#155724" };
      case "R":
        return { backgroundColor: "#f8d7da", color: "#721c24" };
      case "P":
      default:
        return { backgroundColor: "#fff3cd", color: "#856404" };
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

  const formatCpf = (cpf: string) => {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

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
                <TableCell width={2}>{formatCpf(anamnese.cpf_pac)}</TableCell>
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
                    startIcon={userType !== "coordenador" && <EditIcon />}
                  >
                    {userType !== "coordenador" ? "Editar" : "Visualizar"}
                  </Button>
                  {userType === "estagiario" && (
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "#f44336", color: "white" }}
                      size="small"
                      onClick={() => handleClickOpen(anamnese.cpf_pac)}
                      startIcon={<DeleteIcon />}
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
          <Button
            onClick={handleDelete}
            style={{ backgroundColor: "#f44336", color: "white" }}
            autoFocus
          >
            Deletar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ListagemAnamneses;
