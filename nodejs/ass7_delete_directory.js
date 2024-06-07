fs.unlink("/node/"+req.file.filename, (err) => {
    if (err) {
        console.log("failed to delete local image:"+err);
    } else {
        console.log('successfully deleted local image');                                
    }
});