import{j as o}from"./jsx-runtime-C69_ep2g.js";import{r as b}from"./iframe-B4kJE5yM.js";import{M,a as f}from"./Popover-C4oIR-SC.js";import{a as x}from"./IconArrowDownloadFilled-BGr96Cg8.js";import{S as T}from"./index-Bm31ROiK.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./index-BULsaNJl.js";import"./types-tju7SxMQ.js";import"./helpers-Dko3gFqJ.js";import"./IconDismiss--09MBT45.js";import"./Tooltip-BALBxxc_.js";import"./Text-CmvpJS3M.js";import"./index-DAsH4rhJ.js";import"./Button-3eBlV2bd.js";import"./Link-gK0Os5SC.js";import"./NestedMenu-oGktUh7U.js";import"./CollapseGroup-DIb8tJGF.js";import"./Divider-ChnB6Dnr.js";import"./AnimatePresenceWrapper-Bhb_U2Ch.js";import"./IconChevronDown-P2aRch_x.js";import"./IconChevronUp-C3PbzD_I.js";import"./IconChevronRight-Dm1BWnMG.js";import"./AvatarGroup-BcPawsFs.js";import"./DropzoneFileUpload-CQDE9o6R.js";import"./Label-BWRMk2tf.js";import"./useFormProps-DExDRcXs.js";import"./ErrorMessage-BX1FFgws.js";import"./IconDynamicComponent-DS9xoDNJ.js";import"./Snackbar-qs9iEa94.js";import"./Alert-C2zOOhkk.js";import"./IconDismissFilled-BRzIioLt.js";import"./Progress-Bg8w1Q2v.js";import"./IconAdd-C7JAJ3oH.js";import"./Checkbox-D0wmi8rF.js";import"./IconInfo-B2Xuahtu.js";import"./IconCheckmark-CVNdiKzA.js";import"./Empty-hCOruy_r.js";import"./Image-DOqQDxJi.js";import"./Input-D1LwsmCd.js";import"./IconCheckmarkCircleFilled-DcDzymkg.js";import"./IconChevronLeft-CYJnSk0Y.js";import"./IconCaretDownFilled-Q5RER6I2.js";import"./extends-CF3RwP-h.js";import"./Tab-D3XFXLj0.js";import"./Badge-BJ03Scd4.js";import"./IconMore-CS9l2_He.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
