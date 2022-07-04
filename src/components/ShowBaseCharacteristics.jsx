import { Grid, Typography } from "@mui/material";


const ShowBaseCharacteristics = ({ baseParameters }) => {

    return (
        <div>
            <Typography sx={{ textAlign: 'center' }} variant="body1">Базовые параметры</Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
                sx={{
                    marginTop: '0',
                    marginLeft: '1rem',
                }}
            >
                {baseParameters.map((param) =>
                    <Grid key={param.key} container spacing={3}>
                        <Grid container item >
                            <Grid item xs={3}>
                                <Typography variant="body2">{param.name} </Typography>
                            </Grid>
                            <Grid item xs>
                                <Typography sx={{ marginLeft: '1rem' }} variant="body2">{param.value}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                )}
            </Grid>
        </div>
    );
};

export default ShowBaseCharacteristics;