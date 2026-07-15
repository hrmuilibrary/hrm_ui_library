import React from 'react'
import { Text } from '../Text'
import { IUploadItemPropTypes } from './types'
import { useFormProps } from '../../hooks'
import { openFileInNewWindow } from '../../utils/helpers'
import { ErrorMessage } from '../../helperComponents/ErrorMessage'
import { Button } from '../Button'
import IconDelete from '../SVGIcons/IconDelete'

export const UploadItems = (props: IUploadItemPropTypes): React.ReactElement => {
  const { files, onRemove, withFilePreview, handleFileClick, dataTestId = '' } = props
  const { errors } = useFormProps()
  const filesErrors = errors && errors.files && errors.files.length > 0

  return (
    <>
      {files.map((file, index) => {
        return (
          <div
            className={`upload-item mt-4 ${
              filesErrors && errors.files[index]?.message ? 'upload-item--error' : ''
            }`}
            data-test-id={dataTestId ? `${dataTestId}-item-${index}` : ''}
            key={index}
          >
            <div className="upload-item__inner">
              <div className="upload-item__content mb-2">
                <div className="upload-item__content__inner pr-8">
                  <Text
                    size="small"
                    lineHeight="medium"
                    className="upload-item__text"
                    dataTestId={dataTestId ? `${dataTestId}-item-${index}-text` : ''}
                    onClick={(e) =>
                      withFilePreview &&
                      openFileInNewWindow({
                        e,
                        file,
                        handleFileClick
                      })
                    }
                  >
                    {file.name}
                  </Text>
                  {filesErrors && (
                    <ErrorMessage
                      message={errors.files[index]?.message}
                      dataTestId={dataTestId ? `${dataTestId}-item-${index}` : ''}
                    />
                  )}
                </div>
                <Button
                  type="tertiary"
                  size="small"
                  iconProps={{ Component: IconDelete }}
                  dataTestId={dataTestId ? `${dataTestId}-item-${index}-close` : ''}
                  onClick={() => {
                    onRemove(file, index)
                  }}
                />
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}
