import PocketBase from "pocketbase";
import { config } from "./config";

export const pb = new PocketBase(config.pocketbase.url);
