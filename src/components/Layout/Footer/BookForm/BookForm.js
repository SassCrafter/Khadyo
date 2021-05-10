import React from "react";
import { Form } from "../../../index";
import { Formik } from "formik";

function BookForm() {
	return (
		<Formik
			initialValues={{
				bookDate: "",
				bookPeople: "4 people",
				bookTime: "",
			}}
			onSubmit={(values) => {
				console.log(values);
			}}
		>
			{({ dirty, isValid, isSubmiting, submitHandler }) => (
				<Form onSubmit={submitHandler}>
					<Form.Group>
						<Form.Input type="select" name="bookPeople">
							<option value="4 people">4 People</option>
							<option value="5 people">5 People</option>
							<option value="6 people">6 People</option>
							<option value="7 people">7 People</option>
							<option value="8 people">8 People</option>
						</Form.Input>
					</Form.Group>
					<Form.Group>
						<Form.Input type="date" name="bookDate" />
					</Form.Group>
					<Form.Group>
						<Form.Input
							type="time"
							name="bookTime"
							min="11:00"
							max="23:00"
						/>
					</Form.Group>
					<Form.Submit fullWidth>Find Table</Form.Submit>
				</Form>
			)}
		</Formik>
	);
}

export default BookForm;
