import styles from './WindowDialog.module.scss';
import { WindowDialogProps } from './WindowDialog.props';
import cn from 'classnames';
import { FC } from 'react';
import { Interactions, Message, TopLine } from '../../components';

export const WindowDialog: FC<WindowDialogProps> = ({
	className,
	...props
}) => {
	return (
		<div className={cn(className, styles.WindowDialog)} {...props}>
			<TopLine />
			<div className={styles.dialogs}>
				<Message
					his
					data="Thu Jan 19 2023 21:39:11 GMT+0300"
					className={styles.his}>
					Hellodddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
					<br />
					ddddddddddddddd
					<br />
					ddddddddddddddd
					<br />
					ddddddddddddddd
					<br />
					ddddddddddddddd
					<br />
					ddddddddddddddd
					<br />
					ddddddddddddddd
					<br />
					ddddddddddddddd
				</Message>
				<Message data="18.01.2023" className={styles.your}>
					Hi
				</Message>
				<Message data="18.01.2023" className={styles.your}>
					Hi
				</Message>
				<Message data="18.01.2023" className={styles.your}>
					Hi
				</Message>
				<Message data="18.01.2023" className={styles.your}>
					Hi
				</Message>
				<Message data="18.01.2023" className={styles.your}>
					Hi
				</Message>
				<Message data="18.01.2023" className={styles.your}>
					Hi
				</Message>
				<Message data="18.01.2023" className={styles.your}>
					Hi
				</Message>
				<Message data="18.01.2023" className={styles.your}>
					Hi
				</Message>
			</div>
			<Interactions />
		</div>
	);
};
