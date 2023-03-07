import { zodResolver } from '@hookform/resolvers/zod';
import { Grid, Typography, TextField, Button, MenuItem } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

const today = new Date();

const formSchema = z.object({
  firstName: z.string()
      .min(1, "first name is required")
      .min(3, "first name must be at least 3 characters"),
  lastName: z.string(),
  website: z.string()
      .url("must be a valid url")
      .startsWith("https://", {message: "must be a secure domain"})
      .optional(),
  dob: z.preprocess(
    (d:any) => new Date(d), 
    z.date().max(new Date(today.getFullYear() - 18, today.getMonth(), today.getDate()), {message: "must be 18 years old"})
  ),    
  country: z.string()
})
.refine(data => 
  !(data.firstName === 'Peter' && data.country === 'utah'),
  {
      message: "Utah is invalid for Peter",
      path: ['country']
  });

type FormSchema = z.infer<typeof formSchema>;

function MuiFormWithUseHookAndZod() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormSchema>({resolver: zodResolver(formSchema)});
  const onSubmit: SubmitHandler<FormSchema> = data => console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
            container
            spacing={2}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '40vh' }}
        >
          <Grid item>
            <Typography variant="h3" align="center">MUI Form</Typography>
          </Grid>
          <Grid item>
            <TextField
              id="firstName"
              label="First Name"
              type="text"
              {...register('firstName')}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />
          </Grid>
          <Grid item>
            <TextField
              id="lastName"
              label="Last Name"
              type="text"
              {...register('lastName')}
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
            />
          </Grid>
          <Grid item>
            <TextField
              id="website"
              label="Website"
              type="text"
              {...register('website')}
              error={!!errors.website}
              helperText={errors.website?.message}
            />
          </Grid>
          <Grid item>
            <TextField
              id="dob"
              label="Birth Date"
              type="date"
              {...register('dob')}
              error={!!errors.dob}
              helperText={errors.dob?.message}
            />
          </Grid>
          <Grid item>
            <TextField
              id="country"
              label="Country"
              select
              {...register('country')}
              error={!!errors.country}
              helperText={errors.country?.message}
            >
              <MenuItem value='usa'>
                USA
              </MenuItem>
              <MenuItem value='germany'>
                Germany
              </MenuItem>
              <MenuItem value='utah'>
                Utah
              </MenuItem>
            </TextField>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" type="submit">
                Submit
            </Button>
          </Grid>
        </Grid>
      </form>    
    </>
  );
}

export default MuiFormWithUseHookAndZod;
