function delNodes(root, to_delete){
	if (!root){
	    throw new Error('Cannot delete trees of empty forest');
    }
    let result = [];
    let nodesToCheck = [];
    let traversalStack = [];

    let toDeleteSet = new Set(to_delete);

    if (toDeleteSet.has(root.val)){
        traversalStack.push(root);
        if (root.left && !toDeleteSet.has(root.left.val)){
            nodesToCheck.push(root.left);
        }
        if (root.right && !toDeleteSet.has(root.right.val)){
            nodesToCheck.push(root.right);
        }
    } else{
        nodesToCheck.push(root);
    }

    while (traversalStack.length > 0 || nodesToCheck.length > 0){
        if (traversalStack.length < 1){
            traversalStack.push(nodesToCheck.shift());
            result.push(traversalStack[0]);   
            
        }
        let currentNode = traversalStack.pop();
         //Check left children
         if(currentNode.left && toDeleteSet.has(currentNode.left.val)) {
            if (currentNode.left.left && !toDeleteSet.has(currentNode.left.left.val)){
                nodesToCheck.push(currentNode.left.left);
            } 
            if (currentNode.left.right && !toDeleteSet.has(currentNode.left.right.val)){
                nodesToCheck.push(currentNode.left.right);
            } 
            traversalStack.push(currentNode.left);
            currentNode.left = null;
        } else if (currentNode.left) {
                traversalStack.push(currentNode.left);
        }

        //Check right children
        if( currentNode.right && toDeleteSet.has(currentNode.right.val)) {
            if (currentNode.right.left && !toDeleteSet.has(currentNode.right.left.val)){
                nodesToCheck.push(currentNode.right.left);
            } 
            if (currentNode.right.right && !toDeleteSet.has(currentNode.right.right.val)){
                nodesToCheck.push(currentNode.right.right);
            } 
            traversalStack.push(currentNode.right);
            currentNode.right = null;
        } else if(currentNode.right) {
                traversalStack.push(currentNode.right);
        }
        
    }
	return result;
}
