import { Button, Card, Grid, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import TextFormField from "./components/TextFormField";
import html2canvas from "html2canvas";

const defaultValues = {
  ro_number: "",
  date_of_insertion: new Date(),
  code: '',
  client: '',
  start_date: new Date(),
  end_date: new Date(),
  caption: '',
  space: '',
  position: '',
  rate: '',
  material: '',
  payment_method: '',
  special_instruction: '',
  yours: ''
}

function App() {
  const { control, handleSubmit, reset } = useForm({
    defaultValues,
  });

  function onSubmit() {
    const captureElement: any = document.querySelector("#capture");
    html2canvas(captureElement).then((canvas) => {
      const imageData = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.setAttribute("download", "screenshot.png");
      link.setAttribute("href", imageData);
      link.click();
    });
  }

  function handleReset() {
    reset()
  }

  return (
    <div id='capture'>
      <form onSubmit={handleSubmit(onSubmit)}>

        <Card sx={{ paddingX: 25, paddingY: 5 }}>
          <Grid display={"flex"} justifyContent={"center"} marginBottom={3}>
            <Typography
              fontSize={"1.75rem"}
              fontWeight={600}
              sx={{ textDecoration: "underline" }}
            >
              RELEASE ORDER
            </Typography>
          </Grid>
          <Grid>
            <Grid display={"flex"} justifyContent={"space-between"}>
              <Grid>
                <Typography fontSize={"1rem"} fontWeight={600}>
                  To
                </Typography>
                <Grid
                  paddingLeft={"3rem"}
                  display={"flex"}
                  flexDirection={"column"}
                  marginTop={1}
                >
                  <Typography fontWeight={600}>The Marketing Manager</Typography>
                  <Typography fontWeight={600}>Malayala Manorama</Typography>
                  <Typography fontWeight={600}>Alappuzha</Typography>
                </Grid>
              </Grid>
              <Grid display={"flex"} flexDirection={"column"} gap={1}>
                <Grid>
                  <TextFormField
                    control={control}
                    id="ro_number"
                    label="R.O.No."
                    size="small"
                  />
                </Grid>
                <Grid>
                  <TextFormField
                    control={control}
                    id="date"
                    label="Date"
                    size="small"
                  />                </Grid>
                <Grid>
                  <TextFormField
                    control={control}
                    id="code"
                    label="Code"
                    size="small"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid marginTop={4}>
            <Typography>Sir,</Typography>
            <Typography>
              Kindly insert the advertisements as per details given here under in
              your esteemed publication.
            </Typography>
            <Grid
              container
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={2}
              marginY={2}
            >
              <Grid item xs={3}>
                <Typography fontWeight={500}>CLIENT</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextFormField
                  control={control}
                  id="client"
                />
              </Grid>
            </Grid>

            <Grid
              container
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={2}
              marginY={2}
            >
              <Grid item xs={3}>
                <Typography fontWeight={500}>DATE OF INSERTION</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextFormField
                  control={control}
                  id="date_of_insertion"
                />
              </Grid>
            </Grid>

            <Grid
              container
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={2}
              marginY={2}
            >
              <Grid item xs={3}>
                <Typography fontWeight={500}>CAPTION</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextFormField control={control} id="caption"  />
              </Grid>
            </Grid>

            <Grid
              container
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={2}
              marginY={2}
            >
              <Grid item xs={3}>
                <Typography fontWeight={500}>SPACE</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextFormField control={control} id="space"  />
              </Grid>
            </Grid>

            <Grid
              container
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={2}
              marginY={2}
            >
              <Grid item xs={3}>
                <Typography fontWeight={500}>POSITION</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextFormField control={control} id="position"  />
              </Grid>
            </Grid>

            <Grid
              container
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={2}
              marginY={2}
            >
              <Grid item xs={3}>
                <Typography fontWeight={500}>RATE</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextFormField control={control} id="rate"  />
              </Grid>
            </Grid>

            <Grid
              container
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={2}
              marginY={2}
            >
              <Grid item xs={3}>
                <Typography fontWeight={500}>MATERIAL</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextFormField control={control} id="material" />
              </Grid>
            </Grid>

            <Grid
              container
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={2}
              marginY={2}
            >
              <Grid item xs={3}>
                <Typography fontWeight={500}>CHEQUE/CASH/DD</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextFormField
                  control={control}
                  id="payment_method"
                />
              </Grid>
            </Grid>

            <Grid
              container
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={2}
              marginY={2}
            >
              <Grid item xs={3}>
                <Typography fontWeight={500}>SPECIAL INSTRUCTION</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextFormField
                  control={control}
                  id="special_instruction"
                  multiline
                  rows={4}
                />
              </Grid>
            </Grid>

            <Grid marginTop={3}>
              <Grid display={"flex"} gap={5}>
                <Typography>Note:</Typography>
                <Typography>
                  Voucher Copy should be sent immediately on publication directly
                  to our client as well as for record, if for any reason you are
                  unable to insert our client's advertisements on the scheduled
                  dates, please intimate us immediately so as inform the client
                  and get make good date.
                </Typography>
              </Grid>
            </Grid>
            <Grid display={"flex"} justifyContent={"center"} marginTop={3}>
              <Typography>Thanking you,</Typography>
            </Grid>

            <Grid display={"flex"} justifyContent={"end"}>
              <Typography>Yours very truly,</Typography>
            </Grid>
            <Grid container display={"flex"} justifyContent={"space-between"}>
              <Typography>Encl.</Typography>
              <Grid item xs={4} marginTop={2}>
                <TextFormField control={control} id="yours" />
              </Grid>
            </Grid>

          </Grid>

          <Grid display={'flex'} justifyContent={'center'} gap={2}>
            <Button type="submit" variant="contained" >Save</Button>
            <Button onClick={handleReset} variant="outlined" >Reset</Button>

          </Grid>
        </Card>
      </form>
    </div>
  );
}

export default App;
