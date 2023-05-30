import {message, Modal, notification, type ModalFuncProps} from "ant-design-vue";

function createSuccessModal(options: ModalFuncProps) {
  return Modal.success({
    ...options,
  })
}
function createErrorModal(options: ModalFuncProps) {
  return Modal.error({
    ...options,
  })
}

function createWarningModal(options: ModalFuncProps) {
  return Modal.warning({
    ...options,
  })
}

function createInfoModal(options: ModalFuncProps) {
  return Modal.info({
    ...options,
  })
}
function createConfirmModal(options: ModalFuncProps) {
  return Modal.confirm({
    ...options,
  })
}


export function useMessage() {
  return {
    message,
    createSuccessModal,
    createErrorModal,
    createWarningModal,
    createInfoModal,
    createConfirmModal,
    notification
  }
}
