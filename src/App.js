import React, {useState} from 'react';

import Subject from "./components/Subject"
import Nav from "./components/Nav"
import Content from "./components/Content"

function App() {

    // state가 변경되면, render함수가 다시 호출됨됨
   const [state, setState] = useState({
        mode: 'welcome',

        welcome: {
          title: 'Welcome',
          sub: 'Hello, React'
        },

        subject: {
            title: 'WEB',
            sub: 'World Wide Web'
        },

        contents: [
            {
                id: 1,
                title: "HTML",
                desc: "HTML is HyperText..."
            }, {
                id: 2,
                title: "CSS",
                desc: "CSS is for design"
            }, {
            id: 3,
                title: "JS",
                desc: "JS is for interactive"
            }
        ]
    });

    return (
        <div className="App">
            <Subject
                title={state.subject.title}
                sub={state.subject.sub}>
            </Subject>
            {/*<Subject*/}
                {/*title="React"*/}
                {/*sub="For UI">*/}
            {/*</Subject>*/}
            <Nav
                data={state.contents}>>
            </Nav>
            <Content
                title="HTML"
                desc="HTML is HyperText Markup Language.">
            </Content>
        </div>
    );
}

export default App;
