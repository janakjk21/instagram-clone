import { Button, Input, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { auth, db } from "./fire";
const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: "25ch",
		},
	},
}));

export default function BasicTextFields() {
	const classes = useStyles();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [saySomething, setSaySomething] = useState("");
	const [rollNo, set_roll_No] = useState();
	const Signup = (event) => {
		event.preventDefault();
		auth.createUserWithEmailAndPassword(email, password);
	};

	const signIn = (event) => {
		event.preventDefault();

		auth
			.signInWithEmailAndPassword(email, password)
			.then((userCredential) => {
				// Signed in
				var user = userCredential.user;
				console.log(user);
				// ...
			})
			.catch((error) => {});
	};

	const createData = (event) => {
		event.preventDefault();
		db.collection("posts").doc(rollNo).collection("comments").add({
			text: name,
			username: saySomething,
			timestamp: rollNo,
		});
	};

	return (
		<div>
			{" "}
			<form className={classes.root} noValidate autoComplete='off'>
				<Input
					placeholder='email'
					type='text'
					value={email}
					onChange={(e) => setEmail(e.target.value)}>
					{" "}
					email{" "}
				</Input>

				<Input
					placeholder='password'
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}>
					password
				</Input>
				<Button
					variant='contained'
					color='primary'
					type='submit'
					onClick={(event) => Signup(event)}>
					Signup
				</Button>
				<Button
					variant='contained'
					color='primary'
					type='submit'
					onClick={(event) => signIn(event)}>
					{" "}
					signin
				</Button>
			</form>
			<form className={classes.root} noValidate autoComplete='on'>
				<TextField
					id='outlined-basic'
					label='Name'
					variant='outlined'
					value={name}
					onChange={(event) => setName(event.target.value)}
				/>
				<TextField
					id='outlined-basic'
					label='Say something '
					variant='outlined'
					value={saySomething}
					onChange={(event) => setSaySomething(event.target.value)}
				/>
				<TextField
					id='outlined-basic'
					label='rollno '
					variant='outlined'
					value={rollNo}
					onChange={(event) => set_roll_No(event.target.value)}
				/>
				<Button
					variant='contained'
					color='secondary'
					type='submit'
					onClick={(event) => createData(event)}>
					create data
				</Button>
			</form>
		</div>
	);
}
