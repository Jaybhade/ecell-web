import GifLoader from 'react-gif-loader';
 
class ReactGifLoader extends Component {
    render() {
        return (
            <GifLoader
                loading={true}
                imageSrc="./loader.gif"
                imageStyle={imageStyle}
                overlayBackground="rgba(0,0,0,0.5)"
            />
        );
    }
}