import{j as e}from"./jsx-runtime-Kan_8xrb.js";import{r as i}from"./iframe-CoSMEsie.js";import{M as C,N as I}from"./NestedMenu-B330SL2r.js";import{B as b}from"./Button-vf1Fpt4m.js";import{I as y}from"./IconArrowDownloadFilled-CVuOA-7T.js";import{I as g,a as h,b as x}from"./IconBeach-DtbPHZNw.js";import{I as M}from"./IconMore-DaecKgF8.js";import{I as O}from"./IconCheckmark-Dj2ziUwf.js";import{I as n}from"./IconSettings-SrYxOEri.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-BuAw_YGY.js";import"./index-DV_X6Qry.js";import"./Text-ojGX6TEE.js";import"./helpers-DP7MF_vJ.js";import"./index-AboGxAif.js";import"./types-DTFyRcpY.js";import"./index-DNYT35Kh.js";import"./useOnOutsideClick-Cc5bWvJv.js";import"./CollapseGroup-BrSkV7wh.js";import"./Divider-CpPVuBUC.js";import"./AnimatePresenceWrapper-BbJpwGb_.js";import"./IconChevronDown-DIHbFdme.js";import"./IconChevronUp-1ptzeeL9.js";import"./IconChevronRight-z0uxQlPI.js";import"./AvatarGroup-BJOdy4Gf.js";import"./DropzoneFileUpload-De---nQM.js";import"./Label-CB4NFAxp.js";import"./useFormProps-BGsr0HXU.js";import"./ErrorMessage-BUB1h4Qz.js";import"./IconDynamicComponent-CvKtQlK5.js";import"./Snackbar-CApPu7mg.js";import"./Alert-CMpqQD6M.js";import"./IconDismissFilled-Cz4FgAuN.js";import"./Progress-B2wbEs2j.js";import"./IconAdd-DRgt5XfH.js";import"./Checkbox-BqvnTtLZ.js";import"./Popover-CyxbECce.js";import"./IconDismiss-Ca1esRKs.js";import"./Link-B1YppBy_.js";import"./IconInfo-BESVYdCT.js";const ve={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconMore
      }} />
        <_Menu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={items} isOpen={open} />
      </div>
    </div>;
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,f,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`(args: any) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div style={{
    display: 'flex',
    justifyContent: 'flex-end'
  }}>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconSettings
      }} type="tertiary" />
        <_NestedMenu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={NestedItems} isOpen={open} position="bottom-left" />
      </div>
    </div>;
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const Ce=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,Ce as __namedExportsOrder,ve as default};
