/**
 * 
 * @param {*} state is formed by an object that contains `posts` which is an object where each key is a post id. These `posts` have a property: 
 * `likes` which represents the amount of likes it has received
 * @param {*} action: `action` contains `input` which represents the data being sent to the function
 * 
 * exm function:deploy --src function.js --init-state '{"posts": {"A-1": {"likes": 0}}}' --token
 */
export async function handle(state, action) {
    if(!state.posts[action.input.id]) {
        return {
            result: 'Post does not exist'
        }
    } else {
        state.posts[action.input.id].likes++;
    }
    return { state };
}