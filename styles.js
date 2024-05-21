// styles.js 

import { StyleSheet } from "react-native"; 

const styles = StyleSheet.create({ 
	wrapper: {flex : 1 },
	container: { 
		flex: 1, 
		paddingHorizontal: 30,
		paddingVertical: 20,
		margin: 50, 
	}, 
	content: { 
		margin: 15, 
	}, 
	heading: { 
		fontSize: 30, 
		fontWeight: "bold", 
		marginBottom: 15, 
		textAlign: "center", 
		color: "#333", 
	}, 
	subHeading: { 
		fontSize: 23, 
		fontWeight: "bold", 
		marginBottom: 10, 
		color: "#333", 
	}, 
	noData: { 
		fontSize: 17, 
		fontStyle: "italic", 
		marginBottom: 20, 
		color: "#666", 
	}, 
	table: { 
		flexDirection: "row", 
		backgroundColor: "white", 
		borderRadius: 15, 
		elevation: 4, 
		marginBottom: 25, 
		shadowColor: "blue", 
		shadowOffset: { width: 0, height: 0 }, 
		shadowRadius: 5, 
		shadowOpacity: 4, 
	}, 
	passwordItem: { 
		flexDirection: "column", 
		alignItems: "center", 
		borderBottomWidth: 2, 
		borderBottomColor: "#ddd", 
		padding: 5, 
		
	}, 
	listItem: { 
		flexDirection: "row", 
		justifyContent: "space-between", 
		padding : 5,
		alignItems: "center", 
		marginLeft: 15,
		marginRight: 15, 
		marginBottom: 15, 
	}, 
	listLabel: { 
		fontWeight: "bold", 
		marginBottom: 5, 
		color: "#333", 
		fontSize: 19, 
	}, 
	listValue: { 
		flex: 1, 
		fontSize: 18, 
		color: "#444", 
		paddingLeft: 10, 
	}, 
	copyIcon: { 
		marginRight: 10, 
		paddingLeft: 10, 
	}, 
	deleteButton: { 
		backgroundColor: "#365bd8", 
		borderRadius: 4, 
		padding: 5, 
		marginLeft: 10, 
	}, 
	editButton: { 
		backgroundColor: "#d836ca", 
		borderRadius: 4, 
		padding: 5, 
		marginRight: 10, 
	}, 
	buttonsContainer: { 
		flexDirection: "row", 
	}, 
	input: { 
		borderWidth: 2, 
		borderColor: "#eee", 
		paddingVertical: 10, 
		paddingHorizontal: 15, 
		marginBottom: 20, 
		fontSize: 16, 
		borderRadius: 10, 
		backgroundColor: "white", 
		shadowColor: "grey", 
		shadowOffset: { width: 0, height: 0 }, 
		shadowRadius: 10, 
		shadowOpacity: 1, 
		elevation: 4, 
	}, 
	submitButton: { 
		backgroundColor: "#1b883c", 
		color: "white", 
		fontWeight: "bold", 
		borderRadius: 10, 
		paddingVertical: 15, 
		paddingHorizontal: 30, 
		shadowColor: "black", 
		shadowOffset: { width: 2, height: 2 }, 
		shadowRadius: 15, 
		shadowOpacity: 1, 
		elevation: 4, 
	}, 
	submitButtonText: { 
		color: "white", 
		textAlign: "center", 
		fontSize: 18, 
	}, 
}); 
export { styles };
