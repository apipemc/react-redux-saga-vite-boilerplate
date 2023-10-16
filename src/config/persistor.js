import localForage from "localforage";

localForage.config({
  version: 1,
});

export const rootPersistConfig = {
  key: "root",
  storage: localForage,
  debug: import.meta.env.DEV,
  whitelist: ["auth"],
};
