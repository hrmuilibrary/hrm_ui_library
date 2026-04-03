import{j as o}from"./jsx-runtime-B0cC0YjG.js";import{r as b}from"./iframe-ijS3vg12.js";import{M,a as f}from"./Popover-ChGAbmL6.js";import{a as x}from"./IconArrowDownloadFilled-ZFPEUAzG.js";import{S as T}from"./index-CdI7IAHZ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./index-D2lxLMQL.js";import"./types--FqFz6l0.js";import"./helpers-Cg9a9Cp3.js";import"./IconDismiss-DkULDUHs.js";import"./Tooltip-B_uXsCwj.js";import"./Text-Mt6cUdKr.js";import"./Button-D26XtBwQ.js";import"./Link-C67Rpihe.js";import"./NestedMenu-vMmjEm5C.js";import"./index-CikaM_CD.js";import"./CollapseGroup-DU0qU68z.js";import"./Divider-BEXXUIXi.js";import"./AnimatePresenceWrapper-C9FpJWJ_.js";import"./IconChevronDown-C5h1NMJk.js";import"./IconChevronUp-BLmeEYob.js";import"./IconChevronRight-DquWgQ83.js";import"./AvatarGroup-CXT28JwT.js";import"./DropzoneFileUpload-vyhyEgjY.js";import"./Label-kmD-K9sb.js";import"./useFormProps-DuUvd4cY.js";import"./ErrorMessage-xo5KB2tA.js";import"./IconDynamicComponent-BLnZaPZr.js";import"./Snackbar-Bq-FwR0r.js";import"./Alert-D-nNXIhG.js";import"./IconDismissFilled-CzWvA7PI.js";import"./Progress-CVDOsjJY.js";import"./IconAdd-CkXXGanN.js";import"./Checkbox-DxeNAPPO.js";import"./IconInfo-CGUIqtSD.js";import"./IconCheckmark-DW4S3zrV.js";import"./Empty-tTBUvrrV.js";import"./Image-BC690CUA.js";import"./Input-BS3GR14j.js";import"./IconCheckmarkCircleFilled-C7GE82XM.js";import"./IconChevronLeft-emeYI89T.js";import"./IconCaretDownFilled-Cnk6Yjms.js";import"./extends-CF3RwP-h.js";import"./Tab-CNtxvV5C.js";import"./Badge-C4WuDJk0.js";import"./IconMore-CJf8IncM.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return <div>
      <p onClick={openModal}>click here </p>
      <_Modal {...args} titleSize="medium" onClose={closeModal} isOpen={isOpen} onSubmit={() => {
      closeModal();
      console.log('submit');
    }} buttonProps={{
      confirm: {
        buttonText: 'Save',
        buttonActionType: 'submit'
      },
      cancel: {
        buttonText: 'Cancel',
        type: 'secondary'
      }
    }}>
        <div>
          <Select options={OPTIONS} />
        </div>
      </_Modal>
    </div>;
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,u,d;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return <div>
      <p onClick={openModal}>click here </p>
      <_ModalConfirmation {...args} iconProps={{
      Component: IconDelete
    }} onClose={closeModal} isOpen={isOpen} onSubmit={() => {
      closeModal();
      console.log('submit');
    }} buttonProps={{
      confirm: {
        buttonText: 'Delete the card',
        buttonActionType: 'submit'
      },
      cancel: {
        buttonText: 'Cancel'
      }
    }} />
    </div>;
}`,...(d=(u=i.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const xo=["Modal","ModalConfirmation"];export{n as Modal,i as ModalConfirmation,xo as __namedExportsOrder,fo as default};
