use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add(left: usize, right: usize) -> usize {
    left + right
}

#[test]
fn test() {
    let result = add(2, 2);
    assert_eq!(result, 4);
}
