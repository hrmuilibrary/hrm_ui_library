import{j as e}from"./jsx-runtime-pDd-v4ZD.js";import{r as i}from"./iframe-2FnXxmlw.js";import{M as C,N as I}from"./NestedMenu-CgV-Ellx.js";import{B as b}from"./Button-CGescgA9.js";import{I as y}from"./IconArrowDownloadFilled-QtSzW8zi.js";import{I as g,a as h,b as x}from"./IconBeach-Dk0fmP6E.js";import{I as M}from"./IconMore-B_zJLxhz.js";import{I as O}from"./IconCheckmark-CodSIfym.js";import{I as n}from"./IconSettings-BZ1-SSV0.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-DyysFQ0J.js";import"./index-CufBVRh4.js";import"./Text-ClEGDka6.js";import"./helpers-BFS1MnzK.js";import"./index-AboGxAif.js";import"./types-ClOKwcvp.js";import"./index-CUAXAE9B.js";import"./Popover-gkcKSzMq.js";import"./IconDismiss-DXwPvCgD.js";import"./Link-DDNBmxIP.js";import"./CollapseGroup-BqHmjBzQ.js";import"./Divider-CNiUs4fO.js";import"./AnimatePresenceWrapper-DYtUr4Ez.js";import"./IconChevronDown-D1dbowgK.js";import"./IconChevronUp-DZzwt38g.js";import"./IconChevronRight-Bw4WvJcK.js";import"./AvatarGroup-Cn1ZImnV.js";import"./DropzoneFileUpload-DfuygU_q.js";import"./Label-BpioSxO9.js";import"./useFormProps-B0Jor4br.js";import"./ErrorMessage-CA-k-3A8.js";import"./IconDynamicComponent-Bek1Lrvo.js";import"./Snackbar-BLa4LgQT.js";import"./Alert-CravuQ7f.js";import"./IconDismissFilled-DHG6pgD2.js";import"./Progress-BZDm0yK3.js";import"./IconAdd-_2-fGo_d.js";import"./Checkbox-RcRIGnhx.js";import"./IconInfo-Cr3Q0Mpa.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const ve=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,ve as __namedExportsOrder,fe as default};
