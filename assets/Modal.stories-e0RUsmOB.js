import{j as o}from"./jsx-runtime-tk2mia4Y.js";import{r as b}from"./iframe-DZ0iOwVY.js";import{M,a as f}from"./Popover-B3lCFM4d.js";import{a as x}from"./IconArrowDownloadFilled-DShU2Oo5.js";import{S as T}from"./index-eRDmur7-.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./index-zfK6JV0v.js";import"./types-wnfpurwG.js";import"./helpers-BSIkd2d0.js";import"./IconDismiss-Bq-SAAwl.js";import"./Tooltip-9aUW3Gob.js";import"./Text-cQSy3PVe.js";import"./index-BMpkFs1x.js";import"./Button-RicaYwvO.js";import"./Link-D1JHTQ_t.js";import"./NestedMenu-BUbXmlXU.js";import"./CollapseGroup-DcTLtNQw.js";import"./Divider-pAf8BI-e.js";import"./AnimatePresenceWrapper-COh_fWGi.js";import"./IconChevronDown-BSF8lxHF.js";import"./IconChevronUp-Ubcd6gSx.js";import"./IconChevronRight-JR45gZ0e.js";import"./AvatarGroup-BCqememk.js";import"./DropzoneFileUpload-Cm1oiVKI.js";import"./Label-BpPRZUwc.js";import"./useFormProps-BCQM9aqD.js";import"./ErrorMessage-BiwOCjdh.js";import"./IconDynamicComponent-3tLw_L6I.js";import"./Snackbar-BBIpkiAj.js";import"./Alert-DU8vPa1k.js";import"./IconDismissFilled-DAI-A3qw.js";import"./Progress-CBGg94mJ.js";import"./IconAdd-D9m7M9QH.js";import"./Checkbox-CGBbbirX.js";import"./IconInfo-BTnZ8dMc.js";import"./IconCheckmark-Tt8tFr-6.js";import"./Empty-fFRe69oh.js";import"./Image-DgvnXjCN.js";import"./Input-D3FjMLck.js";import"./IconCheckmarkCircleFilled-DVoIKZ0l.js";import"./IconChevronLeft-U1A6NWKc.js";import"./IconCaretDownFilled-Cq4bGSu1.js";import"./extends-CF3RwP-h.js";import"./Tab-Ck6NzKyw.js";import"./Badge-CW3yU-Xr.js";import"./IconMore-BBesberl.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
