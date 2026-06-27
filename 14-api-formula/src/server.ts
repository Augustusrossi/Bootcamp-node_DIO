import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({ logger: true });

server.register(cors, {
  origin: "*",
});

const team = [
  { id: 1, nome: "McLaren", base: "Woking, United Kingdom" },
  { id: 2, nome: "Mercedes", base: "Brackley, United Kingdom" },
  { id: 3, nome: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
  { id: 4, nome: "Ferrari", base: "Maranello, Italy" },
  { id: 5, nome: "Alpine", base: "Enstone, United Kingdom" },
  { id: 6, nome: "Aston Martin", base: "Silverstone, United Kingdom" },
  { id: 7, nome: "Alfa Romeo Racing", base: "Hinwil, Switzerland" },
  { id: 8, nome: "AlphaTauri", base: "Faenza, Italy" },
  { id: 9, nome: "Williams", base: "Grove, United Kingdom" },
  { id: 10, nome: "Haas", base: "Kannapolis, United States" },
  { id: 11, nome: "Uralkali Haas F1 Team", base: "Banbury, United Kingdom" },
  { id: 12, nome: "Scuderia Toro Rosso", base: "Faenza, Italy" },
];

const drivers = [
  { id: 1, nome: "Max Verstappen", equipe: "Red Bull Racing" },
  { id: 2, nome: "Lewis Hamilton", equipe: "Ferrari" },
  { id: 2, nome: "Lando Norris", equipe: "McLaren" },
];

server.get("/equipe", async (request, response) => {
  response.type("application/json").code(200);
  return { team };
});

server.get("/drivers", async (request, response) => {
  response.type("application/json").code(200);
  return { drivers };
});

interface DriverParams {
  id: string;
}

server.get<{ Params: DriverParams }>(
  "/drivers/:id",
  async (request, response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find((d) => d.id === id);

    if (!driver) {
      response.type("application/json").code(404);
      return { message: "Driver Not Found" };
    } else {
      response.type("application/json").code(200);
      return { driver };
    }
  }
);

server.listen({ port: 1302 }, () => {
  console.log("Server init");
});
