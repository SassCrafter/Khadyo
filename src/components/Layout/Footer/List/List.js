import React from "react";
import classes from "./List.module.scss";
import Item from "../Item/Item";
import BookForm from "../BookForm/BookForm";

function List() {
	return (
		<div className={classes.Container}>
			<Item className={classes.Item}>
				<Item.Group>
					<Item.Title>Titan Food Khan</Item.Title>
					<Item.Text>
						570 8th Ave,New York, NY 10018 United States
					</Item.Text>
				</Item.Group>

				<Item.Title>+88 01835-397607</Item.Title>
				<Item.Text>11.00 AM – 11.00 PM</Item.Text>
			</Item>
			<Item className={classes.Item}>
				<Item.Group>
					<Item.Title>Cardio Food Khan</Item.Title>
					<Item.Text>
						Dogfood och Sliders foodtruck. Under Om oss kan ni läsa
					</Item.Text>
				</Item.Group>
				<Item.Title>+88 01835-397607</Item.Title>
				<Item.Text>11.00 AM – 11.00 PM</Item.Text>
			</Item>
			<Item className={classes.Item}>
				<Item.Group>
					<Item.Title>Maldo Food Khan</Item.Title>
					<Item.Text>
						570 8th Ave,New York, NY 10018 United States
					</Item.Text>
				</Item.Group>
				<Item.Title>+88 01835-397607</Item.Title>
				<Item.Text>11.00 AM – 11.00 PM</Item.Text>
			</Item>
			<Item className={classes.Item}>
				<Item.Title>Book Your Table</Item.Title>
				<BookForm />
			</Item>
		</div>
	);
}

export default List;
