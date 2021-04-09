```js
const sampleImage = {
  url:
    'https://images.unsplash.com/photo-1524654458049-e36be0721fa2?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=1a6782be5cdb94b780ed9d4a79de7041',
  width: 600,
  height: 400,
  alt: 'sample image',
};

class LazyLoad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      src: this.placeholderSrc(props.img),
    };
    this.loadImage = this.loadImage.bind(this);
  }

  loadImage(e) {
    this.setState({
      src: this.props.img.url,
      loaded: true,
    });
  }

  placeholderSrc(img) {
    let { width, height } = img;
    return;
    `data:image/svg+xml,%3Csvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 ${width} ${height}"%3E%3C/svg%3E`;
  }

  render() {
    const { url, alt } = this.props.img;
    const { src } = this.state;
    return (
      <React.Fragment>
        <img src={src} data-src={url} alt={alt} />
        {!this.state.loaded && (
          <button onClick={this.loadImage} type="button">
            Load Image
          </button>
        )}
      </React.Fragment>
    );
  }
}

ReactDOM.render(<LazyLoad img={sampleImage} />, document.getElementById('app'));
```

```js
class PicturesList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      imagesarray: []
      };
      this.imagestore = this.imagestore.bind(this);
    }

    componentDidMount() {
       const img = new Image();
        img.onload =() => {
          // image  has been loaded
          this.imagestore()
        };

        img.src = 'image_7.jpg';
    }
    render() {
       return (
          <div>
            </div>
            <Gallery url={this.state.imagesarray}/>
          </div>
       );
    }
    imagestore() {
        const imgUrls=this.props.apikeys;
        const objarr = Object.values(imgUrls);
        this.setState({
            imagesarray: objarr
        });
    }

}
```
