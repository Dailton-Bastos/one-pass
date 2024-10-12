import Svg, { G, Defs, ClipPath, Path, Rect } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

type Props = {
	fill?: string
} & SvgProps

export const EyeOpen = (props: Props) => {
	const { fill = '#FF6464', ...rest } = props

	return (
		<Svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			// xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<G clipPath="url(#clip0_3_169)">
				<Path
					d="M12 3C17.392 3 21.878 6.88 22.819 12C21.879 17.12 17.392 21 12 21C6.608 21 2.122 17.12 1.181 12C2.121 6.88 6.608 3 12 3ZM12 19C14.0395 18.9996 16.0184 18.3068 17.6129 17.0352C19.2073 15.7635 20.3229 13.9883 20.777 12C20.3212 10.0133 19.2049 8.24 17.6106 6.97003C16.0163 5.70005 14.0383 5.00853 12 5.00853C9.9617 5.00853 7.98369 5.70005 6.38938 6.97003C4.79506 8.24 3.67877 10.0133 3.223 12C3.6771 13.9883 4.79267 15.7635 6.38714 17.0352C7.98161 18.3068 9.96053 18.9996 12 19ZM12 16.5C10.8065 16.5 9.66193 16.0259 8.81802 15.182C7.97411 14.3381 7.5 13.1935 7.5 12C7.5 10.8065 7.97411 9.66193 8.81802 8.81802C9.66193 7.97411 10.8065 7.5 12 7.5C13.1935 7.5 14.3381 7.97411 15.182 8.81802C16.0259 9.66193 16.5 10.8065 16.5 12C16.5 13.1935 16.0259 14.3381 15.182 15.182C14.3381 16.0259 13.1935 16.5 12 16.5ZM12 14.5C12.663 14.5 13.2989 14.2366 13.7678 13.7678C14.2366 13.2989 14.5 12.663 14.5 12C14.5 11.337 14.2366 10.7011 13.7678 10.2322C13.2989 9.76339 12.663 9.5 12 9.5C11.337 9.5 10.7011 9.76339 10.2322 10.2322C9.76339 10.7011 9.5 11.337 9.5 12C9.5 12.663 9.76339 13.2989 10.2322 13.7678C10.7011 14.2366 11.337 14.5 12 14.5Z"
					fill={fill}
				/>
			</G>
			<Defs>
				<ClipPath id="clip0_3_169">
					<Rect width="24" height="24" fill="white" />
				</ClipPath>
			</Defs>
		</Svg>
	)
}
