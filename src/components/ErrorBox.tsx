import { FormHelperText } from "@mui/material";
import { errorMessageParser } from "../utils/error";

function ErrorBox({ error }: { error: any }) {
  const errorMessage = errorMessageParser(error);

  return (
    <>
      <FormHelperText sx={{ color: "error.main" }}>
        {errorMessage}
      </FormHelperText>
    </>
  );
}

export default ErrorBox;
