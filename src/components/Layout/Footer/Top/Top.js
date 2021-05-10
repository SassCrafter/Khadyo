import React from "react";
import classes from "./Top.module.scss";
import { Form, Flex, Title } from "../../../index";
import { Formik } from "formik";
import * as Yup from "yup";
import { emailValidation } from "../../../../helpers/inputValidation";

function Top() {
	return (
		<div className={classes.Container}>
			<Flex>
				<Flex.Row>
					<Flex.Column>
						<Title>
							<Title.BigTitle>
								Our Weekly{" "}
								<span className="primary-color">
									Newsletter
								</span>
							</Title.BigTitle>
						</Title>
					</Flex.Column>
					<Flex.Column className={classes.NewsletterForm}>
						<Formik
							initialValues={{
								email: "",
							}}
							validationSchema={Yup.object({
								email: emailValidation,
							})}
							onSubmit={(values) => {
								console.log(values);
							}}
						>
							{({ dirty, isValid, isSubmiting }) => (
								<Form>
									<Form.Group style={{ marginRight: "2rem" }}>
										<Form.Input
											type="email"
											name="email"
											placeholder="Email"
										/>
									</Form.Group>
									<Form.Submit fullWidth>
										Subscribe
									</Form.Submit>
								</Form>
							)}
						</Formik>
					</Flex.Column>
				</Flex.Row>
			</Flex>
		</div>
	);
}

export default Top;
