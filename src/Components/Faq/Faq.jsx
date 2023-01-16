import "./style.css";

const Faq = () => {
    return ( 
        <div className="faq-comp bdr">
            <div className="component  b">
              <div className="label">What is Bookmark?</div>
              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                tincidunt justo eget ultricies fringilla. Phasellus blandit
                ipsum quis quam ornare mattis.
              </div>
            </div>
            <div className="component">
              <div className="label">How can I request a new browser?</div>
              <div className="content">
                Vivamus luctus eros aliquet convallis ultricies. Mauris augue
                massa, ultricies non ligula. Suspendisse imperdiet. Vivamus
                luctus eros aliquet convallis ultricies. Mauris augue massa,
                ultricies non ligula. Suspendisse imperdie tVivamus luctus eros
                aliquet convallis ultricies. Mauris augue massa, ultricies non
                ligula. Suspendisse imperdiet..
              </div>
            </div>
            <div className="component">
              <div className="label">Is there a mobile app?</div>
              <div className="content">
                Sed consectetur quam id neque fermentum accumsan. Praesent
                luctus vestibulum dolor, ut condimentum urna vulputate eget.
                Cras in ligula quis est pharetra mattis sit amet pharetra purus.
                Sed sollicitudin ex et ultricies bibendum.
              </div>
            </div>
            <div className="component">
              <div className="label">What about other Chromium browsers?</div>
              <div className="content">
                Integer condimentum ipsum id imperdiet finibus. Vivamus in
                placerat mi, at euismod dui. Aliquam vitae neque eget nisl
                gravida pellentesque non ut velit.
              </div>
            </div>
          </div>
     );
}
 
export default Faq;