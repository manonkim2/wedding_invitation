import Modal from '@/components/shared/Modal'
import {
  ComponentProps,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import { createPortal } from 'react-dom'

type ModalProps = ComponentProps<typeof Modal>
type ModalOptions = Omit<ModalProps, 'open'>

interface ModalContextValue {
  open: (options: ModalOptions) => void
  close: () => void
}

const defaultValues: ModalProps = {
  open: false,
  body: null,
  onRightButtonClick: () => {},
  onLeftButtonClick: () => {},
}

const Context = createContext<ModalContextValue | undefined>(undefined)

export const ModalContext = ({ children }: { children: React.ReactNode }) => {
  const [modalState, setmodalState] = useState<ModalProps>(defaultValues)

  const protar_root = document.getElementById('root-portal')

  const open = useCallback(
    () => (options: ModalOptions) => {
      setmodalState({ ...options, open: true })
    },
    [],
  )

  const close = useCallback(
    () => () => {
      setmodalState(defaultValues)
    },
    [],
  )

  const values = useMemo(
    () => ({
      open,
      close,
    }),
    [close, open],
  )

  return (
    <Context.Provider value={values}>
      {children}
      {protar_root != null
        ? createPortal(<Modal {...modalState} />, protar_root)
        : null}
    </Context.Provider>
  )
}

export function useModalContext() {
  const values = useContext(Context)

  if (values == null) {
    throw new Error('ModalContext 안에서 사용해주세요')
  }

  return values
}
