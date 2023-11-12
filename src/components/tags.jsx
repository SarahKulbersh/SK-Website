// freefrontend tags
import './tags.scss';

export default function Tags() {

  return (
    <div className="container" style={{justifyContent:"flex-start" ,flexWrap:"wrap"}}>
      <p className="tags">
        <span>Tags</span>
        <a href="#" className="tag">CSS</a>
        <a href="#" className="tag">JavaScript</a>
        <a href="#" className="tag active">Trend</a>
        <a href="#" className="tag">API</a>
        <a href="#" className="more">more...</a>
        <a href="#" className="tag">CSS</a>
        <a href="#" className="tag">JavaScript</a>
        <a href="#" className="tag active">Trend</a>
        <a href="#" className="tag">API</a>
        <a href="#" className="more">more...</a>
        <a href="#" className="tag">CSS</a>
        <a href="#" className="tag">JavaScript</a>
        <a href="#" className="tag active">Trend</a>
        <a href="#" className="tag">API</a>
        <a href="#" className="more">more...</a>
        <a href="#" className="tag">CSS</a>
        <a href="#" className="tag">JavaScript</a>
        <a href="#" className="tag active">Trend</a>
        <a href="#" className="tag">API</a>
        <a href="#" className="more">more...</a>

      </p>
      <svg viewBox="0 0 200 200" className="text-circle">
        <path
          d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
          id="path"
        />
        <text>
          <textPath xlinkHref="#path">SKILLS SKILLS SKILLS SKILLS SKILLS SKILLS</textPath>
        </text>
      </svg>
      <a href="https://dribbble.com/shots/5880849-CSS-Tricks-Style-for-tags-bar-search" className="dribbble" target="_blank">dribbble shot</a>
    </div>
  );
}
