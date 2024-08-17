import React, { useState } from 'react'

function useToggle() {
  const [open, setOpen] = useState<boolean>(false);
  function changeDisplay(): void {
    setOpen(!open);
  }
  return { changeDisplay, open }
}

export default useToggle