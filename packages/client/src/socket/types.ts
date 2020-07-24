export interface AfterLoginArgs {
  uuid: string;
}

export interface AfterLogin {
  (args: AfterLoginArgs): void;
}
