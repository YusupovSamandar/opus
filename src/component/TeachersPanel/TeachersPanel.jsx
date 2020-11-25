// Icons
import Teacher from "./Teacher"
// Packages
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

// Card packages
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },

    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },


    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));
function TeachersContainer() {
    const classes = useStyles();

    return (<Container maxWidth="sm" style={{ marginTop: "100px", maxWidth: "1000px" }}>
        <div className={classes.root}>

            <Grid container spacing={20} >
                {
                    [ {name: "Guruh Jurnali", border: "#0779e4", link: '/teachers', img: "https://www.flaticon.com/svg/static/icons/svg/2795/2795229.svg" },
                    { name: "Xisobotlar", border: "#0779e4", img: "https://www.flaticon.com/svg/static/icons/svg/1256/1256628.svg" },
                    { name: "Tulovlar", border: "#0779e4", img: "https://www.flaticon.com/svg/static/icons/svg/2921/2921222.svg" }
                   
                   ].map((card, index) => (
                        <Teacher style={{ marginTop: "10px" }} color={card.border} link={card.link} img={card.img} description={card.text} name={card.name} day1={card.day1} day2={card.day2} day3={card.day3} />))
                }
            </Grid>
        </div>
    </Container>
    )
}
export default  TeachersContainer