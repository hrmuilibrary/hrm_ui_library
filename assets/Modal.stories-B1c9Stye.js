import{j as o}from"./jsx-runtime-CvWhM1C9.js";import{r as b}from"./iframe-DZT7gpxO.js";import{M,a as f}from"./Popover-CJW9UZJ9.js";import{a as x}from"./IconArrowDownloadFilled-Df_6DlBY.js";import{S as T}from"./index-dbZKSFRl.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DYDl_GcV.js";import"./index-Bbs0tBh8.js";import"./types-BGWVZg8K.js";import"./helpers-Cfueoex7.js";import"./IconDismiss-CQnJUtGM.js";import"./Tooltip-Dn9827Tf.js";import"./Text-C-jsFUx0.js";import"./Button-DoiFIr4a.js";import"./Link-DeWOtt-A.js";import"./NestedMenu-BM2ZQs3Z.js";import"./index-DhSoYT6F.js";import"./CollapseGroup-D0Ixp1ye.js";import"./Divider-BvMcfMes.js";import"./AnimatePresenceWrapper-BoX4Tv9b.js";import"./IconChevronDown-BspoSNX-.js";import"./IconChevronUp-DegtLx_Z.js";import"./IconChevronRight-DCD0reVx.js";import"./AvatarGroup-C9toH664.js";import"./DropzoneFileUpload-DSMqythh.js";import"./Label-JhzPIKFL.js";import"./useFormProps-DRhmaw9E.js";import"./ErrorMessage-3RjkZP3s.js";import"./IconDynamicComponent--rY1R91H.js";import"./Snackbar-DeuuwVB-.js";import"./Alert-C9WYpqdL.js";import"./IconDismissFilled-b-IX0NqM.js";import"./Progress-CY_z_y3l.js";import"./IconAdd-B9JE9ust.js";import"./Checkbox-CaEwBaeV.js";import"./IconInfo-D2KLaeuw.js";import"./IconCheckmark-n5855zcT.js";import"./Empty-CrQXryS1.js";import"./Image-yAK0aIPE.js";import"./Input-BZyLKOqb.js";import"./IconCheckmarkCircleFilled-CbNGfZvt.js";import"./IconChevronLeft-C4CcMErJ.js";import"./IconCaretDownFilled-CSkHbJNf.js";import"./extends-CF3RwP-h.js";import"./Tab-D8DVU2Et.js";import"./Badge-Mac-kqSJ.js";import"./IconMore-Dfs_UlzC.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
