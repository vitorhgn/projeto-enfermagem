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
  const navigate = useNavigate();

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
    navigate("/vitor/cadastro-anamnese");
  };

  const handleEditar = (anamnese: Anamnese) => {
    navigate("/vitor/cadastro-anamnese", { state: { anamnese } });
  };

  return (
    <div>
      <Grid
        container
        justifyContent="flex-end"
        style={{ marginBottom: "20px" }}
      >
        <Button variant="contained" color="primary" onClick={handleCadastrar}>
          Cadastrar Anamnese
        </Button>
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
                <TableCell width={2}>{anamnese.status_anamnese}</TableCell>
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
                  <Button variant="contained" color="secondary" size="small">
                    Deletar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ListagemAnamneses;
