import { Google } from "@mui/icons-material"
import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";


const formData = {
  email: 'afelipehernandezdev@gmail.com ',
  password: '123456',
  displayName: 'Felipe Henrnadez'
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe tener un @'],
  password: [(value) => value.length >=6, 'El correo debe tener un @'],
  displayName: [(value) => value.length >= 2, 'El nombre es obligatorio']
}

export const RegisterPage = () => {

  const {formState, displayName, email, password, onInputChange, 
          formStateValid, displayNameValid, emailValid, passwordValid} = useForm(formData, formValidations); 

  const onSubmit = ( event )=>{
    event.preventDefault();
    console.log(formState)
  }

  return (

    <AuthLayout title="Register">
      <form onSubmit={ onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Nombre'
              type='text'
              placeholder="Felipe Hernandez"
              fullWidth
              name="displayName"
              value={ displayName }
              onChange = { onInputChange }
              error={ !displayNameValid }
              helperText={ displayNameValid }
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Correo'
              type='email'
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={ email }
              onChange = { onInputChange }
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Password'
              type='password'
              placeholder="Secret Pass"
              fullWidth
              name="password"
              value={ password }
              onChange = { onInputChange }
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
                Registrar
              </Button>
            </Grid>

          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1}}>¿Ya tienes una cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to='/auth/login'>
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>


  )
}

