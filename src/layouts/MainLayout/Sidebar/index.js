import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton, { listItemButtonClasses } from "@mui/joy/ListItemButton";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import ReceiptLong from "@mui/icons-material/ReceiptLong";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Toolbar from "@mui/material/Toolbar";
import { drawerWidth, headerHeight } from "../../../config";
import menuItems from "./menu-items";

const Sidebar = ({ container, mobileOpen, handleDrawerToggle }) => {
	const [open, setOpen] = React.useState(false);
	const [open2, setOpen2] = React.useState(false);
	const drawer = (
		<div>
			<Toolbar sx={{ height: headerHeight }} />
			<Divider />
			<Box
				sx={{
					width: 320,
					pl: "24px",
				}}>
				<List
					size="sm"
					sx={(theme) => ({
						// Gatsby colors
						"--joy-palette-primary-plainColor": "#8a4baf",
						"--joy-palette-neutral-plainHoverBg": "transparent",
						"--joy-palette-neutral-plainActiveBg": "transparent",
						"--joy-palette-primary-plainHoverBg": "transparent",
						"--joy-palette-primary-plainActiveBg": "transparent",
						[theme.getColorSchemeSelector("dark")]: {
							"--joy-palette-text-secondary": "#635e69",
							"--joy-palette-primary-plainColor": "#d48cff",
						},
						"--List-insetStart": "32px",
						"--ListItem-paddingY": "0px",
						"--ListItem-paddingRight": "16px",
						"--ListItem-paddingLeft": "21px",
						"--ListItem-startActionWidth": "0px",
						"--ListItem-startActionTranslateX": "-50%",
						[`& .${listItemButtonClasses.root}`]: {
							borderLeftColor: "divider",
						},
						[`& .${listItemButtonClasses.root}.${listItemButtonClasses.selected}`]:
							{
								borderLeftColor: "currentColor",
							},
						'& [class*="startAction"]': {
							color: "var(--joy-palette-text-tertiary)",
						},
					})}>
					{/* <ListItem nested>
            <ListItem component="div" startAction={<ReceiptLong />}>
              <Typography level="body-xs" sx={{ textTransform: "uppercase" }}>
                Documentation
              </Typography>
            </ListItem>
            <List sx={{ "--List-gap": "0px" }}>
              <ListItem>
                <ListItemButton selected>Overview</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
          <ListItem sx={{ "--List-gap": "0px" }}>
            <ListItemButton>Quick Start</ListItemButton>
          </ListItem> */}
					{menuItems.map((menu, idx) => (
						<ListItem
							nested
							sx={{ my: 1 }}
							startAction={
								<IconButton
									variant="plain"
									size="sm"
									color="neutral"
									onClick={() => setOpen(!open)}>
									<KeyboardArrowDown
										sx={{ transform: open ? "initial" : "rotate(-90deg)" }}
									/>
								</IconButton>
							}>
							<ListItem>
								<Typography
									level="inherit"
									sx={{
										fontWeight: open ? "bold" : undefined,
										color: open ? "text.primary" : "inherit",
									}}>
									{menu.title}
								</Typography>
								<Typography component="span" level="body-xs" sx={{ ml: 1 }}>
									{menu.count}
								</Typography>
							</ListItem>
							{open && (
								<List sx={{ "--ListItem-paddingY": "8px" }}>
									{menu.children.map((subMenu) => (
										<ListItem>
											<ListItemButton>{subMenu.title}</ListItemButton>
										</ListItem>
									))}
								</List>
							)}
						</ListItem>
					))}
				</List>
			</Box>
		</div>
	);
	return (
		<Box
			component="nav"
			sx={{
				width: { sm: drawerWidth },
				flexShrink: { sm: 0 },
			}}
			aria-label="mailbox folders">
			{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
			<Drawer
				container={container}
				variant="temporary"
				open={mobileOpen}
				onClose={handleDrawerToggle}
				ModalProps={{
					keepMounted: true, // Better open performance on mobile.
				}}
				sx={{
					display: { xs: "block", sm: "none" },
					"& .MuiDrawer-paper": {
						boxSizing: "border-box",
						width: drawerWidth,
					},
				}}>
				{drawer}
			</Drawer>
			<Drawer
				variant="permanent"
				sx={{
					display: { xs: "none", sm: "block" },
					"& .MuiDrawer-paper": {
						boxSizing: "border-box",
						width: drawerWidth,
					},
				}}
				open>
				{drawer}
			</Drawer>
		</Box>
	);
};

Sidebar.propTypes = {
	container: PropTypes.any,
	mobileOpen: PropTypes.bool,
	handleDrawerToggle: PropTypes.func,
};

export default Sidebar;
