interface ImportMetaEnv {
    VITE_MY_PUBLIC_KEY :string
    VITE_SERVICE_ID :string
    VITE_TEMPLATE_ID : string
    // add other env variables here...
  }
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }