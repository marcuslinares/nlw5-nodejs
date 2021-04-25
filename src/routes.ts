import { Router } from "express"; 
import { SettingsController } from "./controllers/SettingsController";

const routes = Router();

/**
 * Tipos de parâmetros
 * Routes Params => Parâmetros de rotas
 * Ex.: http://localhost:3333/settings/1
 * 
 * Query Params => Filtros e Buscas - Chave e valor
 * Ex.: http://localhost:3333/settings/1?cod=1&nome=Marcus
 * 
 * Body Params  => Passamos objetos
 */

const settingsController = new SettingsController();

routes.post("/settings", settingsController.create);

export { routes };