// dependencies
import { RuleTester } from 'eslint';

// target
import { rules } from '../src';

// helpers
function check(code, errors = []) {
  return { code, parser: 'babel-eslint', errors };
}

// specs
const ruleTester = new RuleTester;
ruleTester.run('space-after-async', rules['space-after-async'], {
  valid: [
    check('async ()=>{}'),
    check('async (foo)'),
    check('const foo = async () => {}'),
  ],
  invalid: [
    check('async()=>{}', ['Missing space after async']),
    check('async(foo)', ['Missing space after async']),
    check('const foo = async() => {}', ['Missing space after async']),
  ],
});

ruleTester.run('space-after-await', rules['space-after-await'], {
  valid: [
    check('async()=>{await (Promise.resolve)()}'),
    check('async()=>{const foo = await Promise.resolve()}'),
  ],
  invalid: [
    check('async()=>{await(Promise.resolve)()}', ['Missing space after await']),
    check('async()=>{const foo = await(new Promise((resolve)=>resolve()))}', ['Missing space after await']),
  ],
});
