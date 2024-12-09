import {InlineCssExample} from './components/InlineCssExample';
import {CssStylesheetExample} from './components/CssStylesheetExample';
import {CssModulesExample} from './components/CssModulesExample';
import {StyledComponentsExample} from './components/StyledComponentsExample';
import {ScssExample} from './components/ScssExample';
import {TailwindExample} from './components/TailwindExample';

export const App = () => {
	return (
		<>
			<InlineCssExample />
			<CssStylesheetExample />
			<CssModulesExample />
			<StyledComponentsExample />
			<ScssExample />
			<TailwindExample />
		</>
	);
};
