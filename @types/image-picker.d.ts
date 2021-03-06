import { ComponentClass } from 'react'

import AtComponent from './base'

interface AtImagePickerProps extends AtComponent {
  files: []

  mode?: 'scaleToFill'|'aspectFit'|'aspectFill'|'widthFix'|'top'|'bottom'|'center'|'left'|'right'|'top left'|'top right'|'bottom left'|'bottom right'

  showAddBtn?: boolean

  multiple?: boolean

  length?: number

  onChange: (files: Array<Object>, operationType: string, index: number) => void

  onImageClick?: (index: number, file: Object) => void

  onFail?: (message: string) => void
}

declare const AtImagePicker: ComponentClass<AtImagePickerProps>

export default AtImagePicker
