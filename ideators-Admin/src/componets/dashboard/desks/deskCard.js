import {
    Button,
    Card,
    CardContent,
    Grid,
    Typography,
} from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import {forceStop} from '../../../redux/actions/desk';

const DeskCard = ({ name, inUse }) => {
    const dispatch = useDispatch();
    return (
        <Grid item>
            <Card
                style={{
                    maxWidth: 350,
                    minWidth: 300,
                }}
            >
                <CardContent>
                    <Typography variant="h5">{name}</Typography>
                    <Typography variant="subtitle1">
                        In Use: {inUse ? "Yes" : "No"}
                    </Typography>
                    {inUse ? (
                        <Button variant="contained" color="secondary" onClick={() => dispatch(forceStop(name))}>
                            Force Stop
                        </Button>
                    ) : null}
                </CardContent>
            </Card>
        </Grid>
    );
};

export default DeskCard;
