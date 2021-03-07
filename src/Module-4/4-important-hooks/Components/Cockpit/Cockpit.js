import React, { useEffect /*, useRef*/ } from 'react';
import cssClasses from './Cockpit.module.css';
import '../../Containers/App';
import App from '../../Containers/App';

const Cockpit = (props) => {

    /*
    useEffect(() => {
        console.log('[Cockpit.js] useEffect  ');
        // Http Request
        setTimeout(() => {
            alert('Saved Data to Cloud!');
        }, 1000);
    }, []); // Runs only single time which is by default
    

    useEffect(() => {
        console.log('[Cockpit.js] useEffect 2');
        // Http Request
        setTimeout(() => {
            alert('Saved Data to Cloud!');
        }, 1000);
    }, [props.persons]);// runs every time when persons change

    useEffect(() => {
        console.log('[Cockpit.js] useEffect  ');
        // Http Request
        const timer = setTimeout(() => {
            alert('Saved Data to Cloud!');
        }, 1000);
        return () => {
         clearTimeout(timer);
            console.log('[Cockpit.js] clean-up work in useEffect ');
        }
    }, []);

    */
    // const toggleButtonRef = useRef(null);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect ');
        // toggleButtonRef.current.click();
        // Http Request
        return () => {
            console.log('[Cockpit.js] clean-up work in useEffect ');

        }
    });

    useEffect(() => {
        console.log('[Cockpit.js] useEffect 2 ');
        return () => {
            console.log('[Cockpit.js] clean-up work in useEffect 2 ');

        }
    }, []);

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = cssClasses.Lightcyan;
    }
    if (props.personsLength < 3)
        assignedClasses.push(cssClasses.mauve);
    if (props.personsLength < 2)
        assignedClasses.push(cssClasses.italic);
    if (props.personsLength > 2 || props.personsLength < 1) {
        assignedClasses.pop(cssClasses.mauve);
        assignedClasses.pop(cssClasses.italic);
        assignedClasses.push(cssClasses.lavender);
    }

    return (
        <div className={cssClasses.Cockpit}>
            <h1 className={assignedClasses.join(' ')}>Welcome To Root File</h1>
            <h2 className={assignedClasses.join(' ')}>{props.indexTitle}</h2>

            <button
                onClick={props.switchButton.bind(App.this, 'rOHIT sINGLA')}
                key="key1">

                Switch Name
            </button>
            <button
                className={btnClass}
                onClick={props.toggleButton}
                key="key2">
                {/* ref={toggleButtonRef} */}
                Toggle Name
            </button>
        </div>
    );
}

export default React.memo(Cockpit);
/*  React.memo is used for optimatization purpose in Functional Components
    in which it does not change with every Parent component with it
*/