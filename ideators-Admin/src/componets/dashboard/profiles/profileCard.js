import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    Grid,
    Typography,
    TextField,
} from "@material-ui/core";
import React from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { addCredit, banUser, unbanUser } from "../../../redux/actions/profile";

const ProfileCard = ({ name, email, credit, banned, userID }) => {
    const buttonColor = banned ? "primary" : "secondary";
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
                    <Typography variant="subtitle1">Email: {email}</Typography>
                    <Typography variant="subtitle1">
                        Credits: {credit}
                    </Typography>

                    <Formik
                        initialValues={{ amount: "", to: userID }}
                        onSubmit={(values) => {
                            dispatch(addCredit(values.to, values.amount));
                        }}
                    >
                        {({ values, handleChange, handleSubmit }) => (
                            <Grid
                                direction="row"
                                justify="center"
                                alignItems="center"
                            >
                                <TextField
                                    id="amount"
                                    name="amount"
                                    onChange={handleChange}
                                    value={values.amount}
                                    label="Add credit"
                                    variant="filled"
                                    type="number"
                                    margin="normal"
                                    required
                                />
                                <Button
                                    onClick={handleSubmit}
                                    variant="contained"
                                    color="primary"
                                    margin="normal"
                                >
                                    Go
                                </Button>
                            </Grid>
                        )}
                    </Formik>

                    <Button
                        variant="contained"
                        color={buttonColor}
                        onClick={
                            banned
                                ? () => dispatch(unbanUser(userID))
                                : () => dispatch(banUser(userID))
                        }
                    >
                        {banned ? "Unban" : "Ban"}
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default ProfileCard;
