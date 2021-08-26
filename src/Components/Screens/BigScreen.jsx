import React from "react";
import { connect } from "react-redux";

import {
	Button,
	Container,
	Divider,
	Grid,
	Header,
	Icon,
	Image,
	Item,
	Label,
	Menu,
	Segment,
	Step,
	Table,
} from "semantic-ui-react";

import ColorPanel from "../ColorPanel/ColorPanel";
import SidePanel from "../SidePanel/SidePanel";
import Messages from "../Messages/Messages";
import MetaPanel from "../MetaPanel/MetaPanel";

import "./BigScreen.css";

const BigScreen = ({
	currentUser,
	currentChannel,
	isPrivateChannel,
	userPosts,
	primaryColor,
	secondaryColor,
}) => {
	return (
		// <Grid
		// 	columns="equal"
		// 	className="app"
		// 	style={{ background: secondaryColor }}
		// >
		// 	<ColorPanel
		// 		key={currentUser && currentUser.name}
		// 		currentUser={currentUser}
		// 	/>
		// 	<SidePanel
		// 		key={currentUser && currentUser.uid}
		// 		currentUser={currentUser}
		// 		primaryColor={primaryColor}
		// 	/>

		// 	<Grid.Column style={{ marginLeft: 320 }}>
		// 		<Messages
		// 			key={currentChannel && currentChannel.id}
		// 			currentChannel={currentChannel}
		// 			currentUser={currentUser}
		// 			isPrivateChannel={isPrivateChannel}
		// 		/>
		// 	</Grid.Column>

		// 	<Grid.Column width={4}>
		// 		<MetaPanel
		// 			key={currentChannel && currentChannel.name}
		// 			userPosts={userPosts}
		// 			currentChannel={currentChannel}
		// 			isPrivateChannel={isPrivateChannel}
		// 		/>
		// 	</Grid.Column>
		// </Grid>

		<Container>
			{/* Heads up! We apply there some custom styling, you usually will not need it. */}

			<Header as="h2" inverted textAlign="center"></Header>
			<Grid columns={3} stackable>
				<Grid.Row>
					<Grid.Column>
						<SidePanel
							key={currentUser && currentUser.uid}
							currentUser={currentUser}
							primaryColor={primaryColor}
						/>

						<ColorPanel
							key={currentUser && currentUser.name}
							currentUser={currentUser}
						/>
					</Grid.Column>

					<Grid.Column>
						<Messages
							key={currentChannel && currentChannel.id}
							currentChannel={currentChannel}
							currentUser={currentUser}
							isPrivateChannel={isPrivateChannel}
						/>
					</Grid.Column>

					<Grid.Column>
						<MetaPanel
							key={currentChannel && currentChannel.name}
							userPosts={userPosts}
							currentChannel={currentChannel}
							isPrivateChannel={isPrivateChannel}
						/>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>
	);
};

const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser,
	currentChannel: state.channel.currentChannel,
	isPrivateChannel: state.channel.isPrivateChannel,
	userPosts: state.channel.userPosts,
	primaryColor: state.colors.primaryColor,
	secondaryColor: state.colors.secondaryColor,
});

export default connect(mapStateToProps)(BigScreen);
