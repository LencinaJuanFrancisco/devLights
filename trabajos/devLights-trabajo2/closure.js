let familia='los simpson'
function papa(){
    const papa='papa'
    console.log(familia);

    function hijo(){
        const hijo='hijo'
        console.log(papa,familia);

        function nieto(){
            console.log(papa,hijo,familia);
        }
        return nieto()
    }
    return hijo()
}
papa()