import { sendLoginv2, sendLoginv3 } from "@/services/user/login";
import { Button } from "antd";
import styles from "./index.less";

const HomePage: React.FC = () => {
	const inter = async () => {
		const data = await sendLoginv2({
			username: "test",
			password: "e10adc3949ba59abbe56e057f20f883e",
		});
		// console.log(data);
	};

	const interErr = async () => {
		const data = await sendLoginv3({
			username: "test",
			password: "e10adc3949ba59abbe56e057f20f883e",
		});
		// console.log(data);
	};
	return (
		<div className={styles.container}>
			<Button onClick={inter}>触发</Button>
			<Button onClick={interErr}>get err</Button>
		</div>
	);
};

export default HomePage;
