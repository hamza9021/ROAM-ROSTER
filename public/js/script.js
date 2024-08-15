(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })();

  let previewImgForm = document.getElementById("previewImgForm");
  previewImgForm.addEventListener("mouseenter", () => {
      let previewImg = document.getElementById("previewImg");
      previewImg.style.display = "inline"; 
  });
  
  previewImgForm.addEventListener("mouseleave", () => {
      let previewImg = document.getElementById("previewImg");
      previewImg.style.display = "none"; 
  });
  
  