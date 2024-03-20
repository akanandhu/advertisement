import { Grid } from "@mui/material";
import { Control, Controller, FieldError } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers";
import ErrorBox from "./ErrorBox";

interface DatePickerProps {
    id: string;
    control: Control<any>;
    error?: FieldError;
    label?: string;
    defaultValue?: Date;
    todayByDefault?: boolean;
    minDate?: Date;
    maxDate?: Date;
    handleChange?: (e: any) => void;
    fillWhite?: boolean;
}

const DatePickerForm = (props: DatePickerProps) => {
    const {
        id,
        control,
        error,
        label,
        defaultValue,
        todayByDefault,
        minDate,
        maxDate,
        handleChange,
        fillWhite,
    } = props;
    const today = new Date();
    return (
        <Grid width={"100%"}>
            <Controller
                name={id}
                control={control}
                render={({ field: { value, onChange } }) => (
                    <DatePicker
                        value={value}
                        onChange={(e) => {
                            onChange(e);
                            handleChange && handleChange(e);
                        }}
                        minDate={minDate ?? null}
                        maxDate={maxDate ?? null}
                        timezone="Asia/Kolkata"
                        label={label ?? "Date"}
                        format="dd/MM/yyyy"
                        defaultValue={
                            defaultValue ? defaultValue : todayByDefault ? today : null
                        }
                        sx={{
                            width: "100%",
                            bgcolor: fillWhite ? "#fff" : "",
                        }}
                        slotProps={{
                            textField: { size: 'small' }
                        }}
                    />
                )}
            />
            {error && <ErrorBox error={error} />}
        </Grid>
    );
};

export default DatePickerForm;
