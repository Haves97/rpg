import { Grid, Typography } from '@mui/material';


const TitleListSkills = ({ title }) => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            item spacing={3}
            sx={{
                marginTop: '0',
            }}
        >
            < Grid
                item
                xs={12}
                sx={{
                    '&.MuiGrid-item': {
                        paddingTop: '0'
                    }
                }}
            >
                <Typography variant="body2">{title}</Typography>
            </Grid>
        </Grid>
    );
};

export default TitleListSkills;