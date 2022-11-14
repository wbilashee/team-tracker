import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button, CardActionArea, CardActions, createTheme, ThemeProvider } from "@mui/material";

export default function Team({ strTeamBadge, strTeam, strSport }) {
    const theme = createTheme({
        typography: {
            fontFamily: [
                "Montserrat",
                "sans-serif",
            ].join(','),
            h5: {
                fontWeight: 700,
            },
            body1: {
                fontWeight: 600,
                color: "rgba(0, 0, 0, 0.5) !important",
            }
        },
    });

    return (
        <Card className="team">
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={strTeamBadge}
                    alt={strTeam}
                />
                <CardContent>
                    <ThemeProvider theme={theme}>
                        <Typography gutterBottom variant="h5" component="h5">
                            {strTeam}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Sport Type: {strSport}
                        </Typography>
                    </ThemeProvider>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button className="btn" variant="contained" endIcon={<ArrowForwardIcon />}>
                    Explore
                </Button>
            </CardActions>
        </Card>
    )
}